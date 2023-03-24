import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

export const removeContainers = (app) => {
  let selected = [];
  let topMulti = [];
  let multis = [];

  app.stage.children.forEach((child) => {
    child.id === "select" && selected.push(child);
    child.id === "flame" && topMulti.push(child);
  });
  app.stage.children.forEach((child) => {
    child.id === "multi" && multis.push(child);
    child.id === "topmulti" && topMulti.push(child);
  });

  selected.forEach((e) => e.destroy());
  app.stage.removeChild(...selected);

  const easeCustom = CustomEase.create(
    "custom",
    "M0,0 C0.012,-0.234 0.574,-0.107 0.584,-0.014 0.646,0.586 0.78,1 1,1 "
  );

  gsap.to(multis, {
    alpha: 0,
    duration: 1,
    ease: easeCustom,
    onComplete: () => {
      multis.forEach((e) => e.destroy());
      app.stage.removeChild(multis);
    },
  });

  gsap.to(topMulti, {
    x: window.innerWidth / 2,
    duration: 0.5,
    delay: 1,
    ease: "none",
    onComplete: () => {
      gsap.to(topMulti, {
        alpha: 0,
        duration: 1,
        delay: 5,
        ease: "none",
        onComplete: () => {
          topMulti.forEach((e) => e.destroy());
          app.stage.removeChild(topMulti);
        },
      });
    },
  });
};

export const removeAllChildWithException = (
  container,
  exceptionIndex,
  exceptionId
) => {
  container.children.forEach((e, i) => {
    if (
      (exceptionId || exceptionIndex) &&
      (i === exceptionIndex || e.id === exceptionId)
    ) {
      console.log(e.id, i);
      return;
    }

    e.destroy();
    container.removeChild(e);
  });
  console.log(container.children);
};
