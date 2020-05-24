var child=readline().split(".")
var root=readline().split(".")
let reg=/^[\w+\.]+/
if (child[child.length-1]==root[root.length-1] && child[child.length-2]==root[root.length-2]) {
    print('yes')
}
else
    print('no')