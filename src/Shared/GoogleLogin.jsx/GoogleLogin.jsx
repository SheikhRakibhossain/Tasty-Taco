const GoogleLogin = () => {
    
  return (
    <div>
      <button className="px-4 py-2 flex justify-center items-center gap-2  rounded-lg text-slate-700  hover:text-slate-900 hover:cursor-pointer transition duration-150">
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
