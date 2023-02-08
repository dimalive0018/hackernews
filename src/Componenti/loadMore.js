export default function LoadMore({ onClick }) {
  return (
    <div className="flex justify-center">
      <button className="border-2 mb-5 text-base md:text-lg border-black text-white bg-black active:scale-90 hover:text-black hover:bg-white" onClick={onClick}>Load More</button>
    </div>
  )
}
