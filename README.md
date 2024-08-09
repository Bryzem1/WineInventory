# Project Setup

## Installation

1. Create a virtual environment:

```bash
python3 -m venv venv

source venv/bin/activate
```

2. Install Backend Dependencies

```bash
pip3 install -r requirements.txt
```

3. Ensure Node.js is installed and is the latest version:

```bash
node -v
```

## Backend

```bash
python3 Backend/src/main.py
```

## Frontend

```bash
npm install
npm run dev
```

Then nevigate to the local url shown below after running "npm run dev".

## VSCode Plugins

1. "Prettier"

2. "Black Formatter"

In the setup, choose the option "format on save".

## Notes

-   Cell error messages(e.g. 名字不能为空， 年份不能为空) and overall error messaeg(请填写所有必填字段后提交) are working correctly now.
-   Wine ID recycling problem needs to be fixed.
