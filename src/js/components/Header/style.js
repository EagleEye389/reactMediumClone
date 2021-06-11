const style = () => ({
    box: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '100%',
        padding: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&>a>img': {
            width: '100%',
            height: '100%',
            '@media screen and (min-width: 768px)': {
                maxWidth: '100px',
                maxHeight: '100px',
            },
        }
    },
    text: {
        textShadow: '2px 3px 5px darkgray',
        color: 'black',
        fontSize: '2em',
        marginLeft: '0.5em',
    },

    Icon: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0.25em',
        fontSize: '3.5em',
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100vw',
        alignItems: 'center',
    },


    mobile: {
        display: 'flex !Important',
    },

    text: {
        fontSize: '3em'
    },

    optionMobile: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: '0',
        background: 'white',
        zIndex: 9999,
        flexDirection: 'column',
        display: 'none',
        '& ul': {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            '&>li': {
                listStyle: 'none',
            '&>a': {
                height: '80px',
                width: '150px',
                borderRadius: '20px',
                marginRight: '5px',
                padding: '5px',
                textDecoration: 'none',
                
                '& button': {
                    width: '400px',
                    height: '200px',
                    fontSize: '2.8em',
                    borderRadius: '7em',
                    }
                }
            }
        }
    },
        
    optionDesktop: { 
        display: 'flex',
        '& ul':{
          display: 'inline-flex',
          '&>li': {
           listStyle: 'none',
          
          '&>a':{
            height: '40px',
            width: '120px',
            borderRadius: '20px',
            marginRight: '5px',
            padding: '5px',
            textDecoration: 'none'
          }
        }
      }
    }  

})

export default style