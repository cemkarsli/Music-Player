class Music{
    constructor(tittle, singer , img ,file){
        this.tittle=tittle;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.tittle + " - " + this.singer 
    }
}


const musicList=[
    new Music("Boşver","Nilifer","1.jpeg","1.mp3"),
    new Music("Bu da Geçer mi Sevgilim","Yalın","2.jpeg","2.mp3"),
    new Music("Aramızda Uçurumlar","Suat Suna","3.jpeg","3.mp3")
]