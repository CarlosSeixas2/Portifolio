import Heading from "../atoms/heading"
import Text from "../atoms/text"
import Badge from "../atoms/badge"
import DateRange from "../atoms/date-range"

interface ExperienceCardProps {
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies?: string[]
  logo?: string
  location?: string
}

const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  description,
  technologies = [],
  logo,
  location,
}: ExperienceCardProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group-hover:border-green-500/30 transition-colors">
              <img
                src={logo || "/placeholder.svg"}
                alt={`${company} logo`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Experience Content */}
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <Heading level={3} className="text-xl group-hover:text-green-400 transition-colors">
                {position}
              </Heading>
              <DateRange startDate={startDate} endDate={endDate} />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
              <span className="font-medium text-white">{company}</span>
              {location && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-sm">{location}</span>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <Text variant="body" className="leading-relaxed">
            {description}
          </Text>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
