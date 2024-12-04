const ColorScheme = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-black bg-white overflow-y-scroll scheme-light">
        Test 1
      </div>
      <div className="bg-slate-800 overflow-y-scroll scheme-dark">
        Test 2
      </div>
    </div>
  )
}

export default ColorScheme
