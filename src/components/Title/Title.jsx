const Title = ({ img, children, underline }) => {
  return (
    <div className="w-full relative flex-col items-center flex justify-center">
      <div className="flex justify-center ">
        <div className="relative">{img}</div>
        <h2 className="absolute mt-[10px] text-white font-helvetica-normal text-3xl leading-[60px] tracking-[5px]">
          {children}
        </h2>
      </div>
      {underline ? (
        <span className="w-[60px] h-[2px] mt-[28px] bg-custom-green"></span>
      ) : null}
    </div>
  );
};

export default Title;
