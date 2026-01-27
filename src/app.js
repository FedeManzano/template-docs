
import "./_modules/bodystyle.bundled"
import StartDocs from "./_modules/_init_docs"
import StartMenues from "./_modules/_template_menues"
import Info from "./_modules/_info"
import ThemesDocs from "./_modules/_themes"
import Search from "./_modules/_search"


StartDocs.Init()
StartMenues.Init()
Info.Init()
ThemesDocs.Init()
Search.Init()


document.querySelectorAll("iframe").forEach(ele => ele.remove())
document.querySelectorAll("ins").forEach(ele => ele.remove())

BS = window.BS 

export default BS;