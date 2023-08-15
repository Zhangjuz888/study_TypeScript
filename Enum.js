//  Enum（枚举类型）
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log("color------", color);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 5] = "red";
    Color2[Color2["green"] = 10] = "green";
    Color2[Color2["blue"] = 1] = "blue";
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
    Color3["red"] = "red";
    Color3["green"] = "green";
    Color3[Color3["blue"] = 1] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.green;
console.log("color3------", color3);
