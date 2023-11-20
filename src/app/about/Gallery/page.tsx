import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <h2>
        This is another page, that isn't really about a gallery yet either
      </h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepJ3mEjyuj1Ci2QQyLvAPKaVmJt9_ys3Hjg&usqp=CAU"
        width={250}
        height={250}
        alt="All of the pink!"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNGoJZHr1cS_NdAqS2aLw6U-lsxxn0Qcwaq_ShdSWUiiivyQsPHs6e6AuW15ylCODaSo&usqp=CAU"
        width={250}
        height={250}
        alt="Oooo Glitter!"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoG7REBrDdf_xQw8FE8X2D6ZWFp8YXAw0rRA&usqp=CAU"
        width={250}
        height={250}
        alt="A sunset"
      />
    </div>
  );
}
