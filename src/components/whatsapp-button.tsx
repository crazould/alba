import React from "react";
import waLogo from "../assets/wa.png";

export default function WhatsappButton() {
  return (
    <button type="button">
      <img
        src={waLogo}
        alt="contact Whatsapp"
        className="fixed z-50 bottom-4 md:bottom-8 lg:bottom-16 right-4 md:right-8 lg:right-16 hover:-translate-y-2 duration-300"
      />
    </button>
  );
}
