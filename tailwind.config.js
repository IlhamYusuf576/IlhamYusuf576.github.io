/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        warna1:'#29ADB2',
        primary:'#0766AD',
        warna2:'#DFECEC',
        bg1:'#F3F3F3',
        pjl1:'#0A6847',
        pjl2:'#7ABA78',
        wrn1:'#0F1825',
        
      },
    screens:{
      
      '2xl':'1320px',
    },
    },
  },
  plugins: [],
}
