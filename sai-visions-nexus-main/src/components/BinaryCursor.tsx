import { useEffect } from "react";

const BinaryCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const binary = document.createElement("span");

      binary.innerText = Math.random() > 0.5 ? "1" : "0";
      binary.style.position = "fixed";
      binary.style.left = `${e.clientX + Math.random() * 10}px`;
      binary.style.top = `${e.clientY + Math.random() * 10}px`;
      binary.style.color = "#38bdf8"; // green (AI vibe)
      binary.style.fontSize = "14px";
      binary.style.fontFamily = "monospace";
      binary.style.pointerEvents = "none";
      binary.style.opacity = "1";
      binary.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      binary.style.transform = "translateY(0)";

      document.body.appendChild(binary);

      requestAnimationFrame(() => {
        binary.style.opacity = "0";
        binary.style.transform = "translateY(-10px)";
      });

      setTimeout(() => {
        binary.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default BinaryCursor;
