const Header = ({dark, setDark}:any) => {
  return ( 
    <div className="flex p-5 justify-around items-center text-xl" >
      <div>
        <p className="font-[pattaya]">Image Gallery</p>
      </div>
      <div className="flex items-center">
        <span className="p-1">Dark Mode</span>
        <input type="checkbox" className="toggle" onClick={()=> setDark(!dark)}/>
      </div>
    </div>
  )
}

export default Header;
