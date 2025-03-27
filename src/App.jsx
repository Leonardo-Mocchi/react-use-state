import { useState } from 'react'
import languages from './data/languages';
import DetailCard from "./components/DetailCard";
import Button from "./components/Button";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className='m-5'>
      <h1 className='my-3 text-light'>Learn Web Development</h1>
      {languages.map((lang) => (
        <Button
          key={lang.id}
          language={lang}
          isSelected={selectedLanguage?.id === lang.id}
          onClick={() => setSelectedLanguage(lang)}
        />
      ))}
      <DetailCard language={selectedLanguage} />
    </div>
  )
}

export default App
