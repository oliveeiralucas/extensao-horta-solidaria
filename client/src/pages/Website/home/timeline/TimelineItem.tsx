import React from 'react'

interface TimelineItemProps {
  title: string
  date: string
  description: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  description
}) => {
  return (
    <div className="relative col-span-12 space-y-4 px-4 before:bg-gray-300 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5 md:space-y-12">
      <hr className="md:hidden" />
      <div className="sm:before:size-4 flex flex-col before:bg-green-600 sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:rounded-full">
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <time className="mt-2 text-xs uppercase tracking-wide text-gray-600 md:mt-0">
          {date}
        </time>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  )
}

export default TimelineItem
