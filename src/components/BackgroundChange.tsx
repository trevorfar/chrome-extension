const BackgroundChange = () => {
    
  const changeColor = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = "green"
      },
      
    })
  }

  return (
    <div className="items-center flex flex-col pt-8">
      <div className="">
        <h1 className="text-2xl text-muted-foreground">Trevor extension</h1>
      </div>
      <div className="">
        <button onClick={() => changeColor()}>Change Color</button>
      </div>
    </div>
  )
}

export default BackgroundChange
