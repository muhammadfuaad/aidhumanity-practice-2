function Radio({marital_status}) {
  return (
    <label className="relative inline-flex items-center gap-2 cursor-pointer">
      <input type="radio" value="mr" name="status" className="sr-only peer"></input>
      <div className="w-6 h-6 rounded-full border-2 border-[#e6e6e6] peer peer-checked:after:bg-[#7c7c7c]
        after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-[#e6e6e6] after:rounded-full after:h-2 after:w-2
        after:transition-all after:duration-500 peer-checked:border-body">
      </div>
      <span className="ml-2 text-[1.4rem] font-medium tracking-[-0.21px] text-[#181818]">{marital_status}</span>
    </label>    
  );
}
export default Radio;