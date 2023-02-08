import { useEffect, useState } from "react";
import { id } from "./API/apiHackerNews";
import { Story } from "./API/story";
import LoadMore from "./loadMore";

export const Home = () => {
    const [ids, setIds] = useState({});
    const [number, setNumber] = useState(10);

    function mostraAltro() {setNumber(number + 10);}

    useEffect(() => {
      id().then(ids => setIds(ids));
    }, [])
    
    return (
      <div>
        <div className="">
          { ids.slice(0, number).map(id => <Story key={id} typeOfStory={id} />) }
        </div>
      <LoadMore onClick={mostraAltro} />
      </div>
    );
}
