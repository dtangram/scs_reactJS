module.exports =  {
  extends: ["airbnb", "react-app", "plugin:import/typescript"],
  rules: {
    // turning off old rule of needing jsx in file names
    "react/jsx-filename-extension": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
      }
   ],
  }
}
