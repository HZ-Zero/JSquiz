

a=[[1,0,1],[0,1,0],[1,0,1]];
function solution(){
    for (let x=0;x<n;x++){
        for (let y=0;y<m;x++){
            if(a[x][y]!=0){
                a[x][y]=findinde(a,x,y);
            }
        }
    }
}