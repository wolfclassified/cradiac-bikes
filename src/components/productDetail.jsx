import React from "react";

const ProductDetails = () => {
  const details = [
    { image: "/assets/details1.svg", label: "FRAME", subtext: "6061 Alloy" },
    { image: "/assets/details2.svg", label: "FORK", subtext: "Alloy Zoom Lockout Suspension" },
    { image: "/assets/details3.svg", label: "SUSPENSION TRAVEL", subtext: "80 mm" },
    { image: "/assets/details4.svg", label: "FRAME SIZES", subtext: "18 inch" },
    { image: "/assets/details5.svg", label: "RIMS", subtext: "Double Wall Alloy" },
    { image: "/assets/details6.svg", label: "BRAKES", subtext: "Jak 160mm Dual Disc" },
    { image: "/assets/details7.svg", label: "SADDLE", subtext: "Memory Foam With Quick Release B-7700" },
    { image: "/assets/details8.svg", label: "BB SET", subtext: "Kenli" },
    { image: "/assets/details9.svg", label: "HEADSET", subtext: "Neco" },
    { image: "/assets/details10.svg", label: "PEDALS", subtext: "Alloy Pedal" },
    { image: "/assets/details11.svg", label: "HANDLE BAR", subtext: "680mm Curved" },
    { image: "/assets/details12.svg", label: "STEM", subtext: "Alloy 80mm" },
    { image: "/assets/details13.svg", label: "SPEED", subtext: "Shimano 21 Speed" },
    { image: "/assets/details14.svg", label: "SHIFTER", subtext: "Shimano EF500" },
    { image: "/assets/details15.svg", label: "FRONT DERAILLEUR", subtext: "Shimano Altus M310" },
    { image: "/assets/details16.svg", label: "REAR DERAILLUER", subtext: "Shimano Acera M3020" },
    { image: "/assets/details17.svg", label: "CHAINWHEEL", subtext: "Shimano Alloy" },
    { image: "/assets/details18.svg", label: "CHAIN", subtext: "Bushless" },
  ];

  return (
    <div className="pb-[20px]">
      <section
      style={{
        backgroundColor: "#F4FAEC",
        borderRadius: "20px",
        padding: "4rem",
      }}
      className="w-full shadow-md mb-4"
    >
      <h2
        style={{ textAlign: "center", marginBottom: "3rem" }}
        className="text-4xl font-semibold"
      >
        Product <em>Details</em>
      </h2>
      <div
        style={{ gridTemplateColumns: "repeat(6, 1fr)",
                columnGap: "0.25rem",
                rowGap: "2rem",
        }}
        className="grid gap-6"
      >
        {details.map((item, index) => (
          <div key={index} className="text-center max-w-[160px] mx-auto">
            <img
              src={item.image}
              alt={item.label}
              className="mx-auto mb-2 w-15 h-15"
            />
            <p className="text-[#8DC63F] font-semibold">{item.label}</p>
            <p className="font-medium break-words text-center">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ProductDetails;