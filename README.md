# Justin Lee Morgan's portfolio frontend codebase
## code testing
All TypeScript code is tested by
```
npm test
```
which sequentially runs <b>prettier</b> format/style checking, <b>eslint</b> linting, <b>jest</b> unit testing, then a <b>jest</b> code coverage check. Each can be ran individually
# prettier
```
npm run prettier -- --check
```
```
npm run prettier -- --write
```
# eslint
```
npm run eslint
```
# jest
```
npm run jest
```
```
npm run jest -- --coverage
```