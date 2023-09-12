import { Button } from "../atom/Button";
import { SectionWrapper } from "../atom/SectionWrapper";

import { FaCloudsmith } from "react-icons/fa";

export const Curriculum = () => {
  const handleDownloadCV = () => {
    //mettre le fichier pdf dans le dossier public et mettre l'url de cette façon "/....""
    const cvSource = "/images/cv-developpeur-web.pdf";
    const a = document.createElement("a");
    a.href = cvSource;
    a.download = "cv-developpeur-web.pdf";
    // a.style.display = "none";
    // document.body.appendChild(a);
    a.click();
    // document.body.removeChild(a);
  };
  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaCloudsmith
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
          />{" "}
          My Curriculum
        </div>
      }
    >
      <div className="m-auto flex gap-4">
        <Button onClick={handleDownloadCV}>Watch it!</Button>
      </div>
    </SectionWrapper>
  );
};
