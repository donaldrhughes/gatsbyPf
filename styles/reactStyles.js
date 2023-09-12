const p_fontSize = "28px"
const f_fontStize = "22px"

export const styles = {
  mb2: {
    marginBottom: "2em",
  },
  rm3: {
    marginRight: "3px",
  },
  p: {
    fontSize: p_fontSize,
    marginLeft: "2%",
    textAlign: 'justify',
    padding: '1%',
  },
  pi: {
    fontSize: p_fontSize,
    fontStyle: "italic"
  },
  h: {
    fontWeight: 'bold',
    fontSize: '32px',
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactBtn: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: '1em'
  },
  titleH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1em",
    textDecoration: "underline",
    fontWeight: "bolder",
    fontSize: "xx-large"
  },
  pageH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1em",
    fontWeight: "bold",
    fontSize: "x-large",
    backgroundColor: "#EEE"
  },
  sectionH: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    marginBottom: "1em",
    marginLeft: "2em",
    fontWeight: "bold",
    fontSize: "large"
  },
  justify: {
    textAlign: 'justify'
  },
  rt6: {
    borderRadius: '6px 6px 0px 0px'
  },
  menuTxt: {
    borderRadius: '6px 6px 0px 0px',
    fontSize: '40px'
  },
  headerImg: {
    width: '20%',
    float: 'right',
    marginLeft: '1%',
  },
  footer: {
    fontSize: f_fontStize,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}

export default styles