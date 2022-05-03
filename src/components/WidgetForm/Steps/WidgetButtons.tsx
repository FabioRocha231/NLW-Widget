import { FeedbackType, feedbackTypes } from "./FeedbackTypes";

type HandleFeedbackTypeChangeProps = (value: FeedbackType) => void;

export type WidgetButtonsProps = {
  handleFeedbackTypeChange: HandleFeedbackTypeChangeProps;
}

export const WidgetButtons = ({handleFeedbackTypeChange}: WidgetButtonsProps) => {
  return (
    <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, {image, title}]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => handleFeedbackTypeChange(key as FeedbackType)}
              type="button"
            >
              <img src={image.source} alt={image.alt} />
              <span>{title}</span>
            </button>
          );
        })}
      </div>
  )
}