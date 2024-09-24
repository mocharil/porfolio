import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const ShinyButton = ({ children, className, onClick, href, ...props }) => {
  const ButtonComponent = href ? motion.a : motion.button;

  return (
    <ButtonComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      href={href}
      className={cn(
        "relative overflow-hidden rounded-full px-8 py-4 font-bold text-white shadow-lg transition-all duration-300",
        "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
        "before:absolute before:inset-0 before:z-0 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:opacity-30 before:blur-xl",
        "before:transition-all before:duration-1000 before:ease-in-out",
        "hover:before:translate-x-full",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </ButtonComponent>
  );
};

ShinyButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default ShinyButton;