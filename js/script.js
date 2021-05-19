// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Gestire il cambio dell'immagine al click sui pallini in basso (nav);
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

var app = new Vue({
    el: "#root",
    data: {
        
        pics: [
            "https://i1.wp.com/www.basketuniverso.it/wp-content/uploads/2020/02/https___cdn.cnn_.com_cnnnext_dam_assets_200126144225-06-kobe-bryant-lead-image.jpg?w=1200&ssl=1",
            "https://www.nbareligion.com/wp-content/uploads/2021/03/lebron-3-e1615544242915.jpg",
            "https://www.sportface.it/wp-content/uploads/2020/12/Kevin-Durant.jpg",
            "https://static.fanpage.it/wp-content/uploads/sites/27/2021/02/michael-jordan-1200x1200.jpg",
            "https://www.aics.it/wp-content/uploads/2020/02/barkley.jpg",
            "https://images.everyeye.it/img-notizie/magic-johnson-campione-nba-protagonista-film-imprese-sportive-v3-451389-1280x960.jpg"
        ],
        picsIndex: 0,
        playerName: [
            "Kobe Bryant",
            "LeBron James",
            "Kevin Durant",
            "Michael Jordan",
            "Charles Barkley",
            "Magic Johnson",
        ],
        nameIndex: 0,
        autoPlay: "",
    },
    
    methods: {
        clickAvanti: function() {
            clearInterval(this.autoPlay);
            this.avanti();
        },
        avanti: function () {
            this.picsIndex++;
            this.nameIndex++;
            if (this.picsIndex > (this.pics.length - 1) && this.nameIndex > (this.playerName.length - 1)) {
                this.picsIndex = 0;
                this.nameIndex = 0;
            }
        },

        
        indietro: function () {
            this.picsIndex--;
            this.nameIndex--;
            if (this.picsIndex < 0 && this.nameIndex < 0) {
                this.picsIndex = (this.pics.length - 1);
                this.nameIndex = (this.playerName.length - 1);
            }
        },

        goToImage: function (newIndex) {
            console.log("goToImage", newIndex);
            clearInterval(this.autoPlay)
            this.picsIndex = newIndex;
            this.nameIndex = newIndex;
        }
    },
    created: function () {
        console.log("Ho creato l'istanza Vue");
        var vm = this;

        this.autoPlay = setInterval(function() {
            vm.avanti();
        }, 3000);
    }
});