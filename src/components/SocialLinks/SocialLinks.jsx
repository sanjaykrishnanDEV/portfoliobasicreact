import resume from '../../assets/resume.pdf';
const SocialLinks = () => {
  return (
    <div className="h-[20em] text-center text-white">
      <h1 className="text-[30px] mt-10">Social Links</h1>
      <div className="div flex flex-wrap justify-center">
        <SocialButton
          skill="LinkedIn"
          link="https://www.linkedin.com/in/sanjaykrishnane/"
        />
        <SocialButton
          skill="Leetcode"
          link="https://leetcode.com/user6228tb/"
        />
      </div>
      <div className="flex flex-col items-center w-auto justify-center">
        <span className="text-3xl w-full m-10">Get My Resume!</span>
        <div className="div">
          <button className="bg-cyan-400 m-3 p-3 rounded-xl"> <a href={resume}>Resume</a></button>
          <button className="bg-cyan-400 m-3 p-3 rounded-xl"><a href="mailto:er.sanjaykrishnan@gmail.com">Mailme</a></button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

function SocialButton(props) {
  return (
    <>
      <div className="border-1 rounded-xl h-auto m-3 p-2  bg-cyan-600  ">
        <a href={props.link}>
          <h2>{props.skill}</h2>
        </a>
      </div>
    </>
  );
}
