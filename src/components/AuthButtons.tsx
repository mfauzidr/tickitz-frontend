
function AuthButtons() {
  return (
    <div className="flex gap-3 items-start self-stretch my-auto tracking-wider leading-6">
      <button className="gap-1.5 self-stretch px-5 py-3 text-blue-700 whitespace-nowrap rounded-md border border-blue-700 border-solid">
        SignIn
      </button>
      <button className="gap-1.5 self-stretch px-5 py-3 bg-blue-700 rounded-md text-slate-50">
        Sign Up
      </button>
    </div>
  );
}

export default AuthButtons;