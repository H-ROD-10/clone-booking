import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/664049.webp?k=fd691141ae6bdd6048ca0095f5d9bec810f571654be41c9bd556d645a474b025"
                 alt="Argentina" 
                 className="featuredImg"
            />
            <div className="featuredTitle">
                <h1>Argentina</h1>
                <p>123 propiedades</p>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/643587.webp?k=7a6ea4ce4ab091c588b4c0e8cddaa89c1e77399c0e5f6bdd83fd73653911fba1"
                 alt="Panama" 
                 className="featuredImg"
            />
            <div className="featuredTitle">
                <h1>Panama</h1>
                <p>80 propiedades</p>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/653307.webp?k=96840ba0ed6ab187b729e16cb1655ad614abe67f521f63486038985e47ea8d2f"
                 alt="Bogota" 
                 className="featuredImg"
            />
            <div className="featuredTitle">
                <h1>Bogota</h1>
                <p>580 propiedades</p>
            </div>
        </div>

    </div>
  )
}

