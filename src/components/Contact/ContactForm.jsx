const ContactForm = () => {
  return (
    <div className="h-[20em] w-full flex justify-center items-center border-2 rounded-2xl">
      <form className="text-white flex flex-col items-center ">
        <label>Name</label>
        <input type="text" className="p-3 w-[280px] rounded-xl mb-4" />
        <label>Email Address</label>
        <input type="mail" className="p-3 w-[280px] rounded-xl mt-4" />
        <button className="bg-slate-200 text-black m-4 p-3">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
