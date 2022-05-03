import { useEffect, useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackType } from "./Steps/FeedbackTypes";
import { WidgetButtons } from "./Steps/WidgetButtons";


export const WidgetForm = () => {
  const [feedbackType, setFeedbackTypes] = useState<FeedbackType | null>(null);

  function handleFeedbackTypeChange(key: FeedbackType) {
    setFeedbackTypes(key);
  }

  useEffect(() => {
    console.log(feedbackType);
  }, [feedbackType]);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-4">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <WidgetButtons handleFeedbackTypeChange={handleFeedbackTypeChange} />
      ) : (
        <p>Hello World</p>
      )}

      <footer>
        Feito com ♥{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
