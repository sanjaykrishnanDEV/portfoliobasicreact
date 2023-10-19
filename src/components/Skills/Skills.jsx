const Skills = () => {
  return (
    <>
      <div className=" mt-28 text-center w-[1/2]  flex flex-col  items-center justify-center text-white ">
          <span className="text-2xl ">I am Good at...</span>
        <div className="div flex m-3 flex-wrap justify-center">
          <SkillButton skill="HTML" />
          <SkillButton skill="CSS" />
          <SkillButton skill="Vanilla Javascript" />
          <SkillButton skill="React" />
          <SkillButton skill="Responsive Web Design" />
          <SkillButton skill="Bootstrap" />
          <SkillButton skill="TailwindCss" />
          <SkillButton skill="Jquery" />
        </div>
      </div>
    </>
  );
};

export default Skills;

function SkillButton(props) {
  return (
    <>
      <div className="border-1 rounded-xl h-auto m-3 p-2  bg-cyan-600  ">
        <h2>{props.skill}</h2>
      </div>
    </>
  );
}
