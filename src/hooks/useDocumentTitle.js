import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} | Skyline Rooftop`;
  }, [title]);
}

