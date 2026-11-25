import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";


const App = () => {
  return (
    <div>
      <PageLayout
      header={<h1>Welcome to My Website</h1>}
      footer={<p>Copyright © 2026 My Website</p>}
      >

      <h2>This is main Contant</h2>
      </PageLayout>

        
    </div>
  )
}

export default App
