import bugImageUrl from "../../../assets/bug.svg";
import ideaImageUrl from "../../../assets/idea.svg";
import otherImageUrl from "../../../assets/other.svg";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "imagem de um balao de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
export type FeedbackTypeProps = typeof feedbackTypes;