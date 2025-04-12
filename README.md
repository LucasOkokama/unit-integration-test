

# About the project
This repository was created as a space to explore and consolidate knowledge in unit and integration testing, through practical code examples using various programming languages and testing tools. It serves as a structured archive for experimenting with different approaches, comparing techniques, and observing how testing concepts can be applied across different contexts. The goal is to build a deeper understanding of software testing, while maintaining a clean and organized collection of reference materials.

# Tech Stack
The project explores unit and integration testing using multiple technologies. It includes Java with JUnit and Mockito, Python with pytest, and JavaScript with Jest and Vitest. This diverse stack highlights different testing approaches and serves as a reference for understanding core testing principles across languages.

<table align="center">
    <tr>
        <th></th>
        <th>
            Frontend
        </th>
        <th>
            Backend
        </th>
    </tr>
    <tr>
        <th>
            Languages
        </th>
        <td>
            <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
            <img alt="Typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
        </td>
        <td>
            <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
            <img alt="Python" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
        </td>
    </tr>
    <tr>
        <th>
            Unit Testing
        </th>
        <td>
            <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
            <img alt="Vitest" src="https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B" />
        </td>
        <td>
            <img alt="Pytest" src="https://img.shields.io/badge/pytest-%23ffffff.svg?style=for-the-badge&logo=pytest&logoColor=2f9fe3" />
        </td>
    </tr>
    <tr>
        <th>
            IDE / Editor
        </th>
        <td>
            <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
        </td>
        <td>
            <img alt="IntelliJ IDEA" src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white" />
        </td>
    </tr>
</table>


# Requirements
1. Install [`Node.js`](https://nodejs.org/en) and ensure it includes the `npm` package manager.


# How to run locally (command line)
1. Run a `git clone` of the repository:
```
git clone https://github.com/LucasOkokama/pexels-image-search.git
```
2. Open the `pexels-image-search` folder and install the `dependencies`:
```
cd pexels-image-search
npm install
```
3. Create a [`Pexels account`](https://www.pexels.com/api/) and get an `API key`. Next, in the root folder, create a `.env` file and add your API key as follows:
```
VITE_PEXELS_API_KEY=<YOUR_API_KEY_HERE>
```
4. `Run the project`:
```
npm run dev
```
5. Access `localhost` to open the website:
```
http://localhost:5173
```

# References
This project was inspired by the [`Flashdash`](https://flashdash-nine.vercel.app/) website created by [`Paulo Victor`](https://github.com/paulopbi).


# License
```
MIT License

Copyright (c) 2025 Lucas Kazuhiro Okokama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
