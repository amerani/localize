# babel-plugin-localize
modify static strings in jsx code to localization friendly formats

## jsx text
input
```
<p>hello world</p>;
<Static>hello world</Static>;
```
output
```
import { localizer } from './localizer';

<p>{localize("loc_0")}</p>;
<Static>hello world</Static>;

export const localizeKeyMap = {
  "loc_0": "hello world"
};
```

## jsx attributes
input
```
<Title name="hello world" id="title" />;
```
output
```
import { localizer } from './localizer';

<Title name={localize("loc_0")} id="title" />;

export const localizeKeyMap = {
  "loc_0": "hello world"
};
```

## options
```
{
    "elementsReplaceStringAttributes": {
        "Title": ["name"]
    },
    "elementsPreserveJsxText": {
        "Static": true
    },
    "keyPrefix": "loc_",
    "keyType": "serial",
    "localizer": "localize",
    "localizerBinding": "named",
    "localizerSource": "./localizer",
    "keyMapIdentifier": "localizeKeyMap"
}
```