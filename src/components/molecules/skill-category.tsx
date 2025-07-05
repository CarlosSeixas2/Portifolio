import Heading from "../atoms/heading"

interface SkillCategoryProps {
  title: string
  skills: string[]
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300">
      <Heading level={3} className="mb-6 text-center text-xl">
        {title}
      </Heading>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800/50 hover:bg-green-500/10 border border-gray-700 hover:border-green-500/30 rounded-lg p-3 text-center transition-all duration-200 group cursor-default"
          >
            <span className="text-gray-300 group-hover:text-green-400 font-medium text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
