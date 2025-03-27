import React from "react";

function DetailCard({ language }) {
    return (
        <div className="my-2 p-4 bg-primary text-white border border-primary rounded">
            {language ? (
                <div>
                    <h2 className="text-decoration-underline">{language.name}</h2>
                    <p>{language.description}</p>
                </div>
            ) : (
                <p>Select a coding language above by clicking it :)</p>
            )}
        </div>
    );
}

export default DetailCard;