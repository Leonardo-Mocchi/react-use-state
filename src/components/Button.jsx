import React from "react";

function Button({ language, isSelected, onClick }) {
    return (
        <button type="button"
            className={`btn btn-lg px-3 py-2 mx-2 my-3 ${isSelected ? "btn-primary text-white" : "btn-outline-primary"
                }`}
            onClick={onClick}
        >
            {language.name}
        </button>
    );
}

export default Button;