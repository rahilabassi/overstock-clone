var header = document.createElement("section")
header.innerHTML = `
<nav class="navbar">

<div class="uppernav">
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
    <a class="main-link" href="index.html"><div class="cropped"><img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062021/rgb.overstock_logo.primary.2021-04-08.png?zKvD93zF6Exo3AylwdRlEL2OiGi20gEi&itok=gSikhvBC"/></div></a>
    
    <div class="search-bar"><input type="text" placeholder="Search"/>
        <button type="submit"><i class= "fa fa-search"></i></button></div>
    <a class="likes" href="signup.html">
        <div style="margin-left: 15px"><img style="width:26px; height: 26px; margin-top: 22px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&usqp=CAU"/>
            <p style="padding: 0px; margin-top: -8px; font-size: small;font-weight: 400;">Account</p>
        </div>
    </a>
    <a  href="#">
        <div style="margin-left: 15px">
            <img style="width:26px; height: 26px; margin-top: 22px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbxmqmeHvxf2ye3anS9Wz1OY46VhNpoMbDvSXo0E8yoa0UtzvPC0LjrQMqiIBzo3pj_E&usqp=CAU"/>
            <p style="padding: 0px; margin-top: -8px; font-size: small;font-weight: 400;">Notifications</p>
        </div>
    </a>
    <a href="cart.html">
        <div style="margin-left: 15px">
            <img style="width:36px; height: 28px; margin-top: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAB0dHTCwsK7u7t9fX1WVlasrKzV1dXJycmOjo7h4eFpaWn19fU+Pj75+fmDg4Pv7+9BQUEzMzPZ2dlfX1+mpqZvb28TExOwsLDp6elSUlKcnJwWFhYhISFGRkYqKiqSkpI3NzeIiIguLi59M9k0AAAGSUlEQVR4nO2d2XbiMAyGJ6RAIJStpCylBErf/xmng0+bSPHGJJJCj767TidYqi3rt+yYP38URVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURamRLYsRZnCcSJvVGc9viYPps7RtnbBy+fePo7R1XTD3eZiMpM1rT+p1MElepA1szSzg4eP34mfIw+RV2sSWhD1MHnxGdaaKiqu0je04hj1MpG1sx3OEhw+ubl7DHk6lbWxJeJx+SJvYliw42yykTWzNYpMBNkjpPHggWtn9qkC0AcXcWtocAsa/LRAb5L8/EKGHvz8QHz4jWkCBWK0v9tsBP1uCicAZiE9OXUAIyRh6B01UgeitXFFBUhGDgVhWv3gR8DCj8NCZEZcCHlI42KtAnJF46MyIAoE4pvEQBuK8+sWJ3cMDjYfOjMgeiO80DroDMVQm75wlkYfONSJ7IKZUHjrXiNwZkWzt1peMWHpsbEdfMiLhJiZsqArE56eUFDR4SCSbwZkRidlDDwlbcmZEYuBftiBsSapYA5slkmwGmappBj0kkmwGmUCEGyln0rZQIJK2VVGCRoekbYkE4gI2SibZDLAxnkBEwp643C6xfQE1IXXwS2xfwAX2hbg1gUA8wCYJJZuBPxD5JJuBPyPySTYDfyDCBkkl2w32QNzABkklm4FbmkLJtiNvz7N9QQSnZDMwByI6hEYs2W4wByKSbCyLbtgkdSDySjYDb0aE+7LUks3AWqzhlmw3WAORW7IZXBv6FHBLNlurtBkRdiG9ZDMwZkQk2XLCpuowBiK/ZDNADykDkV+yGdgyIqqyPdG1hGDLiBOuhjBsgQglG+fBZK41Itw955FsBqaqqYhkMzBlRBnJdoMpEGUkmwF6SBWIsBXeFztZMqKQZDOwZEQo2U4kbThhCUT4ftmApA03DBlRTLIZGAJRTLIZGDIilGzsr7AwBOIZtMAp2QzQQ4JAFJRsBnJpiiQb/+uA5BlxCz5f4DIO8kCEny9xFwdxIKK/IK9kM6D3EdOnTkkH0EMBB3Eg0sIt2W7kYbu6g1uyGXZhwzpjJeLhNmxYV/CdKAcwvoIgdW8Tn4dS1zaxzaZyL//7767rDL4tpwYxFy51wEbOQ56cyHFIyM2B/gVZ8TtGiF/MG/Xg9rvDkM6/gn9lbycbL4fD5fW6LM675DQfLK9fP9/L10OD9S55f5n9+6Svn4+Tnl3zsxrPvoPyPPiP2SEdfiefXTGW0aFeUnwB2uyuOT7Hd4qWMqsJJ5ntwsxRdEesCsvjJ/FJtIZrPt3HPb53PC6y7LWx+nBYGHlBx8D5+Lkf4XhwGvjFPDwdem8wlBRs33gdjCgVB65oZHj5IMAiVMsI7L4HCwXiOXEUstC/PndNMhXSN0/HLII9Ay3mypDICZmIRdjAJHlzP2/Lgw1Ex+klxkL3xtgm/GwifIFhlIXuUIrqQtFOtNQT14XlrhpHJFqKIJ9F2fxHwUjEffBilhSN6cdx20rj0mkz7U5wgYv+7TEnyJIfHbmYR5mIkv3nz3Ie61yxdT66rqI2Z+I51h5Jbj/Q4BBbZaB0XY82FKHW/U2k9+rRhvKk2JcxXIEZUJ5BMWdd8qMTQeB3UMzxndFHwBIU/EPDcWadDWE/Q10AJyvek6U14MIO9tM0PMygh7CfYP+KaVPoIewnOB1GeAgXyz3xEI5S+LUeMHFbRyl8/xUeH4VHS4nu8gwDMzbYIUKToXW69x0BhoURMWWKXkKudxSqvVhlGxJt9Y7yfDIreHVX9QIWrPbnkYKtghVXRiSOC1lN/DkTgr8CZGt/HIuz78HYuCyUwxc7F2zKfDzJ02OjdOOo8U/w/0suaT4Zr/G/CtZNA3W2YB9EPi65AWVZzFlwHu+N+eIlscM0hixsX+Jbo0c9Lrt/EVOH8KwMYkp1nkIWBxGnMbyDrDGrNJGueoePfnl3V8Jzlfw+4iVgYSCKQpHchy+xu3otDAou/yBwaAVmfL0YsZ/fzPsVZDeT34mzG05RgjJ/dz0vu2VRZ2XfBIwur9h3yUvpWRQwaaqb4o7927yZVz/lJ1FEBspju8udHZBPgV4f9OUwFGTzOnxbz8tiOv6v8XXYD0flvBwtX/vpnqIoiqIoiqIoiqIoiqIoiqIoiqIoiqLQ8BedIknZm4TNegAAAABJRU5ErkJggg=="/>
            <p style="padding: 0px; margin-top: -8px; font-size: small;font-weight: 400;">Cart</p>
        </div>
    </a>
    
</div>
<div class="search-bar-sm" ><input type="text" placeholder="Search"/>
    <button type="submit"><i class= "fa fa-search"></i></button></div>
<hr>
<div class="lowernav">
    <div class="subnav1"><a href="furniture.html" class="navlink">Furniture</a>
        <div class="furniture">
    
            <div class="subdiv">
                <p><a href="#">Living Room Furniture</a></p>
                <div><a href="#">Sofas & Couches</a></div>
                <div><a href="#">Sectionals</a></div>
                <div><a href="#">Benches</a></div>
                <div><a href="#">Ottomans & Poufs</a></div>
                <div><a href="#">Acccent Chairs</a></div>
                <div><a href="#">Recliners</a></div>
                <div><a href="#">Coffee & Accent Tables</a></div>
                <div><a href="#">TV Stands</a></div>
            </div>
            
            <div class="subdiv">
                <p><a href="#">Bedroom Furniture</a></p>
                <div><a href="#">Beds</a></div>
                            <div><a href="#">Bedroom Sets</a></div>
                            <div><a href="#">Headboards</a></div>
                            <div><a href="#">Bed Frames</a></div>
                            <div><a href="#">Dressers & Chests</a></div>
                            <div><a href="#">Nightstands</a></div>
                            <div><a href="#">Armoires & Wardrobes</a></div>
                            <div><a href="#">Mattresses</a></div>
                            <div><a href="#">Kids Beds</a></div>
                </div>
            
            <div class="subdiv">
                <p><a href="#">Dining, Kitchen & Bar</a></p>
                <div><a href="#">Kitchen & Dining Sets</a></div>
                <div><a href="#">Kitchen & Dining Chairs</a></div>
                <div><a href="#">Kitchen & Dining Tables</a></div>
                <div><a href="#">Counter & Bar Stools</a></div>
                <div><a href="#">Bar Tables</a></div>
                <div><a href="#">Home Bars</a></div>
                <div><a href="#">Kitchen Islands & Carts</a></div>
                <div><a href="#">Kitchen Furniture</a></div>
               
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/4588435b0ad815a3bb10a5c5c1d4e3db985925bc/Middlebrook-Designs-Gammelstaden-Mid-century-6-drawer-Dresser.jpg?imwidth=320"/>
                <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Furniture By Middlebrook Designs<sup>*</sup></p>
                </a>
                
            </div>
            <div class="subdiv">
                <p><a href="#">Patio & Outdoor Furniture</a></p>
                <div><a href="#">Patio Furniture Sets</a></div>
                <div><a href="#">Dining Sets</a></div>
                <div><a href="#">Coffee & Side Tables</a></div>
                <div><a href="#">Chaise Lounges</a></div>
                <div><a href="#">Adirondack Chairs</a></div>
                <div><a href="#">Hammocks & Swings</a></div>
                <div><a href="#">Outdoor Benches</a></div>
                
            </div>
            
            
            <div class="subdiv">
                <p><a href="#">Office Furniture</a></p>
                <div><a href="#">Desks</a></div>
                <div><a href="#">Office Chairs</a></div>
                <div><a href="#">Small Space Desks</a></div>
                <div><a href="#">Office Shelves & Storage</a></div>
                <div><a href="#">File Cabinets</a></div>
                <div><a href="#">Office & Conference Tables</a></div>
                <div><a href="#">Bookshelves</a></div>
                <div><a href="#">Gaming Chairs</a></div>
            </div>
            
                <div class="subdiv">
                         <p><a href="#">More</a></p>
                        <div><a href="#">Entryway</a></div>
                        <div><a href="#">Bathroom</a></div>
                        <div><a href="#">Home Gym</a></div>
                        <div><a href="#">Rec Room</a></div>
                        <div><a href="#">Small Space Living</a></div>
                        <div><a href="#">Kids & Baby Furniture</a></div>
    
                </div>
                <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                    <p><a href="#">More Ways To Shop</a></p>
                        <div><a href="#">Featured Sales</a></div>
                        <div><a href="#">New Arrivals</a></div>
                        <div><a href="#">Clearance</a></div>
                        <div><a href="#">Furniture Advice</a></div>
                   </div> 
        </div>
    </div>
 
    <div class="subnav2"><a href="#" class="navlink">Rugs</a>
        <div class="rugs">
            <div class="subdiv">
                <p><a href="#">Area Rugs By Size</a></p>
                <div><a href="#">3'x5'</a></div>
                <div><a href="#">4'x6'</a></div>
                <div><a href="#">5'x8'</a></div>
                <div><a href="#">6'x9'</a></div>
                <div><a href="#">7'x9'</a></div>
                <div><a href="#">8'x10'</a></div>
                <div><a href="#">9'x12'</a></div>
                <div><a href="#">10'x14'</a></div>
                <div><a href="#">Runner</a></div>
             </div>
             <div class="subdiv">
                <p><a href="#">Area Rugs By Color</a></p>
                <div><a href="#">Grey</a></div>
                <div><a href="#">Blue</a></div>
                <div><a href="#">Ivory</a></div>
                <div><a href="#">White</a></div>
                <div><a href="#">Black</a></div>
                <div><a href="#">Red</a></div>
                <div><a href="#">Brown</a></div>
                <div><a href="#">Orange</a></div>
                <div><a href="#">Pink</a></div>
             </div>
             <div class="subdiv">
                <p><a href="#">Area Rugs By Type</a></p>
                <div><a href="#">Area Rugs</a></div>
                <div><a href="#">Outdoor Rugs</a></div>
                <div><a href="#">Rugs Pads</a></div>
                <div><a href="#">One of a Kind Rugs</a></div>
                <div><a href="#">Kids & Tweens Rugs</a></div>
                <div><a href="#">Door Mats</a></div>
                <div><a href="#">Stair Treads</a></div>
                <div><a href="#">Kitchen Mats & Rugs</a></div>
                <div><a href="#">Bath Mats & Rugs</a></div>
             </div>
             <div class="subdiv">
                 <a href="#">
                     <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/deaf98da41a552f567fa9b1674c993e05d972ceb/SAFAVIEH-Hudson-Shag-Justine-Modern-2-inch-Thick-Rug.jpg"/>
                     <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 25% off</p>
                     <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Rugs<sup>*</sup></p>
                 </a>
             </div>
             <div class="subdiv">
                <p><a href="#">Trending Rugs</a></p>
                <div><a href="#">Washable Rugs</a></div>
                <div><a href="#">Round Rugs</a></div>
                <div><a href="#">Shag Rugs</a></div>
                <div><a href="#">Wool Rugs</a></div>
                <div><a href="#">Jute Rugs</a></div>
                <div><a href="#">Cowhide Rugs</a></div>
                <div><a href="#">Braided Rugs</a></div>
                <div><a href="#">Handmade Rugs</a></div>
                <div><a href="#">Vintage Rugs</a></div>
             </div>
             <div class="subdiv">
                <p><a href="#">Area Rugs By Style</a></p>
                <div><a href="#">Modern & Contemporary</a></div>
                <div><a href="#">Bohemian & Eclectic</a></div>
                <div><a href="#">Persian</a></div>
                <div><a href="#">Transitional</a></div>
                <div><a href="#">Geometric</a></div>
                <div><a href="#">Abstract</a></div>
                <div><a href="#">Solid</a></div>
                <div><a href="#">Floral & Botanical</a></div>
                
             </div>
             <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Rugs Advice</a></div>
               </div> 
        </div>
    </div>
    <div class="subnav3"><a href="#" class="navlink">Decor</a>
        <div class="decor">
            <div class="subdiv">
                <p><a href="#">Mirrors</a></p> 
                <div><a href="#">Wall Mirrors</a></div>
                <div><a href="#">Bathroom Vanity Mirrors</a></div>
                <div><a href="#">Floor Mirrors</a></div>
                <div><a href="#">Full Length Mirrors</a></div>
                <div><a href="#">Rectangular Mirrors</a></div>
                <div><a href="#">Round Mirrors</a></div>
                <div><a href="#">Window Mirrors</a></div>
                <div><a href="#">Mirror Sets</a></div> 
            </div>
            <div class="subdiv">
                <p><a href="#">Decoreative Accessories</a></p> 
                <div><a href="#">Indoor Fireplaces</a></div>
                <div><a href="#">Outdoor Decor</a></div>
                <div><a href="#">Accent Pieces</a></div>
                <div><a href="#">Silk Plants</a></div>
                <div><a href="#">Candles & Holders</a></div>
                <div><a href="#">Vases</a></div>
                <div><a href="#">Room Dividers</a></div>
                <div><a href="#">Photo Frames & Albums</a></div> 
                <div><a href="#">Planters, Hanagers & Stands</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Wall Decor</a></p> 
                <div><a href="#">Wall Sculptures</a></div>
                <div><a href="#">Decorative Shelves</a></div>
                <div><a href="#">Wall Tapestries</a></div>
                <div><a href="#">Clocks</a></div>
                <div><a href="#">Wall Decals</a></div>
                <div><a href="#">Acrylic Wall Art</a></div>
              
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/d28cbaf23c439090fa43c0cf806ac147b7e1040f/Arched-Dressing-Mirror-Full-length-Floor-Mirror-with-Standing.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Home Decor<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Art Gallery</a></p> 
                <div><a href="#">Gallery Wrapped Canvas</a></div>
                <div><a href="#">Canvas Art</a></div>
                <div><a href="#">Framed Prints</a></div>
                <div><a href="#">Unframed Prints</a></div>
                <div><a href="#">Metal Art</a></div>
                <div><a href="#">Wood Wall Art</a></div>
                <div><a href="#">Matching Sets</a></div>
                 
            </div>
            <div class="subdiv">
                <p><a href="#">Window Treatments</a></p> 
                <div><a href="#">Curtains & Drapes</a></div>
                <div><a href="#">Blinds & Shades</a></div>
                <div><a href="#">Curtain Rods & Haedware</a></div>
                <div><a href="#">Sheer Curtains</a></div>
                <div><a href="#">Blackout Curtains</a></div>
                <div><a href="#">Kitchen Curtains</a></div>
                <div><a href="#">Valances</a></div>
                <div><a href="#">Stained Glass Panels</a></div> 
            </div>
            <div class="subdiv">
                <p><a href="#">Throw Pillows</a></p> 
                <div><a href="#">Accent Pillows</a></div>
                <div><a href="#">Outdoor Pillows</a></div>
                <div><a href="#">Floor Pillows</a></div>
                <div><a href="#">Poufs</a></div>
                <div><a href="#">Pillow Covers</a></div>
                <div><a href="#">Bed Rest</a></div>
                
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Decor Advice</a></div>
               </div> 
        </div>
    </div>
    <div class="subnav4"><a href="#" class="navlink">Bed & Bath</a>
    <div class="bed">
        <div class="subdiv">
            <p><a href="#">Bedding</a></p>
            <div><a href="#">Comforter Sets</a></div>
            <div><a href="#">Duvet Covers</a></div>
            <div><a href="#">Bed-in-a-Bag</a></div>
            <div><a href="#">Quilts & Coverlets</a></div>
            <div><a href="#">Blankets & Throws</a></div>
            <div><a href="#">Bedspreads</a></div>               
        </div>
        <div class="subdiv">
            <p><a href="#">Bedding Basics</a></p>
            <div><a href="#">Sheets & Pillowcases</a></div>
            <div><a href="#">Mattress Pads & Toppers</a></div>
            <div><a href="#">Comforters & Duvet Inserts</a></div>
            <div><a href="#">Pillows</a></div>
            <div><a href="#">Cotton Bedding</a></div>                   
        </div>
        <div class="subdiv">
            <p><a href="#">Mattresses</a></p>
            <div><a href="#">Twin</a></div>
            <div><a href="#">Twin XL</a></div>
            <div><a href="#">Full</a></div>
            <div><a href="#">Queen</a></div>
            <div><a href="#">King</a></div>
            <div><a href="#">California King</a></div>
            <div><a href="#">Air Mattresses</a></div>
            <div><a href="#">Mattresses in a Box</a></div>
        </div>
        <div class="subdiv">
            <a href="#">
                <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/aae7298c6dad6ee752e90b9ada8625407c000547/Intelligent-Design-Leena-Shaggy-Faux-Fur-Comforter-Set.jpg"/>
                <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                <p style="font-weight: 300; font-size: 12px; padding: 0px;border: none;">Select Bedding & Bath<sup>*</sup></p>
            </a>
        </div>
        <div class="subdiv">
            <p><a href="#">Bath & Towels</a></p>
            <div><a href="#">Shower Curtains</a></div>
            <div><a href="#">Towels</a></div>
            <div><a href="#">Bath Rugs & Mats</a></div>
            <div><a href="#">Bath Accessories</a></div>
            <div><a href="#">Bath Robes</a></div>
            <div><a href="#">Kids Bath</a></div>
        </div>
        <div class="subdiv">
            <p><a href="#">Kids Bedding</a></p>
            <div><a href="#">Kids Sheets</a></div>
            <div><a href="#">Kids Comforter Sets</a></div>
            <div><a href="#">Kids Bed-in-a-Bag</a></div>
            <div><a href="#">Kids Quilts</a></div>
            <div><a href="#">Kids Bed Tents & Canopies</a></div>
            <div><a href="#">Kids Mattresses</a></div>                   
        </div> 
        <div class="subdiv">
            <p><a href="#">Bathroom Furniture</a></p>
            <div><a href="#">Bathroom Vanities</a></div>
            <div><a href="#">Bathroom Vanity Mirrors</a></div>
            <div><a href="#">Bathroom Sinks</a></div>
            <div><a href="#">Bathroom Faucets</a></div>
            <div><a href="#">Bathroom Cabinets</a></div>
            <div><a href="#">Tubs</a></div>
            <div><a href="#">Showers</a></div>                   
        </div> 
        <div class="subdiv imp" style="grid-area: 2/4/3/5;">
            <p><a href="#">More Ways To Shop</a></p>
                <div><a href="#">Featured Sales</a></div>
                <div><a href="#">New Arrivals</a></div>
                <div><a href="#">Clearance</a></div>
                <div><a href="#">Bedding Advice</a></div>
           </div>                 
    </div></div>
    <div class="subnav5"><a href="#" class="navlink">Home Improvement</a>
        <div class="home">
            <div class="subdiv">
                <p><a href="#">Kitchen</a></p>
                <div><a href="#">Ranges & Ovens</a></div>
                <div><a href="#">Refrigerators</a></div>
                <div><a href="#">Kitchen Carts & Islands</a></div>
                <div><a href="#">Kitchen Sinks</a></div>
                <div><a href="#">Kitchen Faucets</a></div>
                <div><a href="#">Kitchen Cabinets</a></div>
                <div><a href="#">Backsplash</a></div>          
            </div>
            <div class="subdiv">
                <p><a href="#">Bathroom</a></p>
                <div><a href="#">Bathroom Vanities</a></div>
                <div><a href="#">Bathroom Vanity Mirrors</a></div>
                <div><a href="#">Bathroom Sinks</a></div>
                <div><a href="#">Bathroom Faucets</a></div>
                <div><a href="#">Bathroom Cabinets</a></div>
                <div><a href="#">Tubs</a></div>
                <div><a href="#">Showers</a></div>
                <div><a href="#">Toilets</a></div>              
            </div>
            <div class="subdiv">
                <p><a href="#">Storage & Organization</a></p>
                <div><a href="#">Outdoor Storage</a></div>
                <div><a href="#">Laundry Room</a></div>
                <div><a href="#">Garage Storage</a></div>
                <div><a href="#">Decorative Storage</a></div>
                <div><a href="#">Closet Organizers</a></div>
                <div><a href="#">Kitchen Pantry</a></div>
                <div><a href="#">Cabinets</a></div>
                <div><a href="#">Furniture Storage</a></div>
                <div><a href="#">Safes</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/fe65fb3c91f141cb3bc6d2f2f06911180a97c388/Proox-Single-handle-Kitchen-Faucet-Pull-Down-Sprayer-w--Soap-dispenser.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Home Improvement<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Flooring & Wall</a></p>
                <div><a href="#">Tile</a></div>
                <div><a href="#">Laminate Fooring</a></div>
                <div><a href="#">Vinyl Flooring</a></div>
                <div><a href="#">Hardwood Flooring</a></div>
                <div><a href="#">Wallpaper</a></div>
                <div><a href="#">Wall Tiles</a></div>
                <div><a href="#">Ceiling Tiles</a></div>             
            </div>
            <div class="subdiv">
                <p><a href="#">Home Essentials</a></p>
                <div><a href="#">Vacuums & Floorcare</a></div>
                <div><a href="#">Heating & Cooling</a></div>
                <div><a href="#">Air Qualiy</a></div>
                <div><a href="#">Sewing Machines</a></div>
                <div><a href="#">Craft Machines</a></div>
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Home Improvement Advice</a></div>
               </div> 
        </div>
    </div>
    <div class="subnav6"><a href="#" class="navlink">Kitchen</a>
        <div class="kitchen">
            <div class="subdiv">
                <p><a href="#">Dinnerware</a></p>
                <div><a href="#">Dinnerware Sets</a></div>
                <div><a href="#">Formal Dinnerware</a></div>
                <div><a href="#">Plates</a></div>
                <div><a href="#">Bowls</a></div>
                <div><a href="#">Cups & Saucers</a></div>
                <div><a href="#">Mugs</a></div>
                <div><a href="#">Flatware</a></div>
                <div><a href="#">Tumblers</a></div>
                <div><a href="#">Glasses & Barware</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Kitchen Furniture</a></p>
                <div><a href="#">Kitchen & Dining Sets</a></div>
                <div><a href="#">Kitchen & Dining Chairs</a></div>
                <div><a href="#">Kitchen & Dining Tables</a></div>
                <div><a href="#">Counter & Bar Stools</a></div>
                <div><a href="#">Bar Tables</a></div>
                <div><a href="#">Buffets & Sideboards</a></div>
                <div><a href="#">Home Bars</a></div>
                <div><a href="#">Kitchen Carts</a></div>
                <div><a href="#">Kitchen Cabinets</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Serveware</a></p>
                <div><a href="#">Serving Platters & Trays</a></div>
                <div><a href="#">Serving Bowls</a></div>
                <div><a href="#">Warming Buffet & Trays</a></div>
                <div><a href="#">Drink Pitchers</a></div>
                <div><a href="#">Salt & Pepper Shakers</a></div>
                <div><a href="#">Chip & Dip Sets</a></div>
                <div><a href="#">Table Linens</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/7508194/Hamilton-Beach-26030-Belgian-Waffle-Maker-9e4e0fb9-116d-44c4-9b97-2805b4e2519c_1000.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Kitchen & Dining<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Cookware & Bakeware</a></p>
                <div><a href="#">Cookware Sets</a></div>
                <div><a href="#">Pots & Pans</a></div>
                <div><a href="#">Specialty Cookware</a></div>
                <div><a href="#">Grill Pans & Griddles</a></div>
                <div><a href="#">Cooking Essentials</a></div>
                <div><a href="#">Cutlery</a></div>
                <div><a href="#">Bakeware</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Kitchen Appliances</a></p>
                <div><a href="#">Mixers</a></div>
                <div><a href="#">Blenders</a></div>
                <div><a href="#">Coffee Makers</a></div>
                <div><a href="#">Air Fryers</a></div>
                <div><a href="#">Pressure Cookers</a></div>
                <div><a href="#">Food Processors</a></div>
                <div><a href="#">Major Appliances</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Kitchen Storage</a></p>
                <div><a href="#">Wine Racks</a></div>
                <div><a href="#">Kitchen Trash Cans</a></div>
                <div><a href="#">Pot Racks</a></div>
                <div><a href="#">Pantry Storage</a></div>
                <div><a href="#">Kitchen Canisters</a></div>
                <div><a href="#">Plastic Storage Containers</a></div>
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Kitchen Advice</a></div>
               </div> 
        </div>

    </div>
    <div class="subnav7"><a href="#" class="navlink">Outdoor</a>
        <div class="outdoor">
            <div class="subdiv">
                <p><a href="#">Patio Furniture</a></p>
                <div><a href="#">Patio Furniture Sets</a></div>
                <div><a href="#">Sofas, Chairs & Sectionals</a></div>
                <div><a href="#">Dining Sets</a></div>
                <div><a href="#">Dining Tables</a></div>
                <div><a href="#">Dining Chairs</a></div>
                <div><a href="#">Coffee & Side Tables</a></div>
                <div><a href="#">Chaise Lounges</a></div>
                <div><a href="#">Adirondack Chairs</a></div>
                <div><a href="#">Hammocks & Swings</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Outdoor Decor</a></p>
                <div><a href="#">Fire Pits</a></div>
                <div><a href="#">Outdoor Rugs</a></div>
                <div><a href="#">Doormats</a></div>
                <div><a href="#">Outdoor Lighting</a></div>
                <div><a href="#">Garden Accents</a></div>
                <div><a href="#">Outdoor Curtains & Shades</a></div>
                <div><a href="#">Outdoor Cushions & Pillows</a></div>
                <div><a href="#">Planters, Hangers & Stands</a></div>
                <div><a href="#">Patio Furniture Covers</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Umbrellas & Shades</a></p>
                <div><a href="#">Patio Umbrellas</a></div>
                <div><a href="#">Sunsails</a></div>
                <div><a href="#">Gazebos & Pergolas</a></div>
                <div><a href="#">Umbrella Bases</a></div>
                <div><a href="#">Beach Umbrellas</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/3735ba1b91fa8acfb23da0e7afe50208ada16293/Elias-Outdoor-Acacia-Wood-Outdoor-Chat-Set-by-Christopher-Knight-Home.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Garden & Patio<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Gardening & Yard Care</a></p>
                <div><a href="#">Sheds & Outdoor Storage</a></div>
                <div><a href="#">Greenhouses</a></div>
                <div><a href="#">Gardening & Yard Tools</a></div>
                <div><a href="#">Mowers & Trimmers</a></div>
                <div><a href="#">Hoses & Sprinklers</a></div>
                <div><a href="#">Fencing & Privacy Screens</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Grills & Outdoor Cooking</a></p>
                <div><a href="#">Gas Grills</a></div>
                <div><a href="#">Charcoal Grills</a></div>
                <div><a href="#">Smokers</a></div>
                <div><a href="#">Grilling Accesories</a></div>
                <div><a href="#">Grilling Tools & Cookware</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Sports & Outdoors</a></p>
                <div><a href="#">Swing Sets</a></div>
                <div><a href="#">Trampolines</a></div>
                <div><a href="#">Hot Tubs & Spas</a></div>
                <div><a href="#">Bicycles</a></div>
                <div><a href="#">Skating & Scooters</a></div>
                <div><a href="#">Lawn Games</a></div>
                <div><a href="#">Tents & Outdoor Canopies</a></div>
                <div><a href="#">Sport Nets & Hoops</a></div>
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Patio Advice</a></div>
               </div> 
        </div>
    </div>
    <div class="subnav8"><a href="Jewelry.html" class="navlink">Jewelry</a>
        <div class="jewelry">
            <div class="subdiv">
                <p><a href="#">All Jewelry</a></p>
                <div><a href="#">Rings</a></div>
                <div><a href="#">Necklaces</a></div>
                <div><a href="#">Earings</a></div>
                <div><a href="#">Bracelets</a></div>
                <div><a href="#">Moissanite Rings</a></div>
                <div><a href="#">Jewelry Boxes</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Wedding Rings</a></p>
                <div><a href="#">Engagement Rings</a></div>
                <div><a href="#">Bridal Sets</a></div>
                <div><a href="#">Semi-Mount Rings</a></div>
                <div><a href="#">Women's Wedding Bands</a></div>
                <div><a href="#">Men's Wedding Bands</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Fine Jewelry</a></p>
                <div><a href="#">Diamond Rings</a></div>
                <div><a href="#">Gold Necklaces</a></div>
                <div><a href="#">Diamond Studs</a></div>
                <div><a href="#">One-of-a-Kind</a></div>
                <div><a href="#">Vintage & Estate</a></div>
                <div><a href="#">Gemstone Rings</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/29068043/Annello-by-Kobelli-14k-Gold-4-Carats-TGW-Oval-Moissanite-Three-Stone-X-Prong-Trellis-Bold-Engagement-Ring-HI-VS-cfa6c2e1-ceaa-4840-805d-66cab8a7ff61_1000.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Jewelry & Watches<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Men's Jewelry</a></p>
                <div><a href="#">Men's Rings</a></div>
                <div><a href="#">Men's Necklaces</a></div>
                <div><a href="#">Men's Bracelets</a></div>
                <div><a href="#">Cuff Links</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Watches</a></p>
                <div><a href="#">Men's Watches</a></div>
                <div><a href="#">Women's Watches</a></div>
                <div><a href="#">Kids Watches</a></div>
                <div><a href="#">Luxury Watches</a></div>
                <div><a href="#">Watch Accessories</a></div>
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Jewelry Advice</a></div>
               </div> 
        </div>
    </div>
    <div class="subnav9"><a href="Lights.html" class="navlink">Lighting</a>
        <div class="lighting">
            <div class="subdiv">
                <p><a href="#">Ceiling Lights</a></p>
                <div><a href="#">Chandeliers</a></div>
                <div><a href="#">Pendant Lights</a></div>
                <div><a href="#">Flush Mount Lights</a></div>
                <div><a href="#">Track Lights</a></div>
                <div><a href="#">Recessed Lights</a></div>
                <div><a href="#">Semi-Flush Mount Lights</a></div>
                <div><a href="#">Wagon Wheel Chandliers</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Wall Lighting</a></p>
                <div><a href="#">Flush Mount Wall Lights</a></div>
                <div><a href="#">Wall Sconces</a></div>
                <div><a href="#">Night Lights</a></div>
                <div><a href="#">Picture Lights</a></div>
                <div><a href="#">Swing Arm Lights</a></div>
                <div><a href="#">Step & Hall Lights</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Ceiling Fans</a></p>
                <div><a href="#">Indoor Ceiling Fans</a></div>
                <div><a href="#">Fandeliers</a></div>
                <div><a href="#">Dining Sets</a></div>
                <div><a href="#">Outdoor Ceiling Fans</a></div>
                <div><a href="#">Ceiling Fan Light Kits</a></div>
                <div><a href="#">Ceiling Fan Accessories</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/69d6ab9a69fc24a9f5adf1ccef4d0fcf833bf07e/Aged-Wood-Beaded-6-Light-Candle-Chandelier.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Lighting<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Lamps & Lamp Shades</a></p>
                <div><a href="#">Table Lamps</a></div>
                <div><a href="#">Floor Lamps</a></div>
                <div><a href="#">Lamp Sets</a></div>
                <div><a href="#">Desk Lamps</a></div>
                <div><a href="#">Lamp Shades</a></div>
                <div><a href="#">Accent Lamps</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#"></a>Outdoor Lighting</p>
                <div><a href="#">Outdoor Wall Lights</a></div>
                <div><a href="#">Outdoor Ceiling Lights</a></div>
                <div><a href="#">Landscape Lighting</a></div>
                <div><a href="#">String Lights</a></div>
                <div><a href="#">Post Lights</a></div>
                <div><a href="#">Security & Motion Sensor Lights</a></div>               
            </div>
            <div class="subdiv">
                <p><a href="#">Kitchen & Bath Lighting</a></p>
                <div><a href="#">Kitchen Island Lights</a></div>
                <div><a href="#">Under Cabinet Lights</a></div>
                <div><a href="#">Bathroom Vanity Lights</a></div>
                <div><a href="#">Bathroom Sconces</a></div>
                <div><a href="#">Bath Bar Lights</a></div>               
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Lighting Advice</a></div>
               </div>
        </div>
    </div>
    <div class="subnav10"><a href="#" class="navlink">Kids & Baby</a>
        <div class="kids">
            <div class="subdiv">
                <p><a href="#">Baby</a></p>
                <div><a href="#">Cribs</a></div>
                <div><a href="#">Crib Mattresses</a></div>
                <div><a href="#">Baby Bedding</a></div>
                <div><a href="#">Gliders & Ottomans</a></div>
                <div><a href="#">Changing Tables</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Kids Furniture</a></p>
                <div><a href="#">Kids Beds</a></div>
                <div><a href="#">Kids Mattresses</a></div>
                <div><a href="#">Kids Dressers</a></div>
                <div><a href="#">Kids Desks</a></div>
                <div><a href="#">Kids Storage & Toy Boxes</a></div>
                <div><a href="#">Bean Bags</a></div>
                <div><a href="#">Kids Chairs</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Kids Bedding</a></p>
                <div><a href="#">Kids Comforter Sets</a></div>
                <div><a href="#">Kids Quilts</a></div>
                <div><a href="#">Kids Bed-in-a-Bag</a></div>
                <div><a href="#">Kids Sheets</a></div>
                <div><a href="#">Kids Duvet Covers</a></div>
                <div><a href="#">Kids Canopies</a></div>
                <div><a href="#">Kids Blankets & Throws</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                   <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/b5b17dc8e98e0cfb4ea68622068adf35178581c0/Qaba-Large-Kids-Kitchen-Playset-with-Telephone%2C-Water-Dispenser-Simulation-Cooking-Set-for-Girls-and-Boys%2C-White.jpg"/>
                   <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 10% off</p>
                   <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Baby Products<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Toys By Age</a></p>
                <div><a href="#">2-4 Years</a></div>
                <div><a href="#">5-7 Years</a></div>
                <div><a href="#">8-11 Years</a></div>
                <div><a href="#">12-15 Years</a></div>
                <div><a href="#">Teen</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Toys & Play</a></p>
                <div><a href="#">Outdoor Play</a></div>
                <div><a href="#">Swing Sets</a></div>
                <div><a href="#">Bikes, Ride-Ons & Scooters</a></div>
                <div><a href="#">Pretend Play</a></div>
                <div><a href="#">Inflatable Bounce Houses</a></div>
                <div><a href="#">Kids Outdoor Furniture</a></div>
                <div><a href="#">Playhouses & Play Tents</a></div>
            </div>
            <div class="subdiv imp" style="grid-area: 2/4/3/5;">
                <p><a href="#">More Ways To Shop</a></p>
                    <div><a href="#">Featured Sales</a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Clearance</a></div>
                    <div><a href="#">Kids & Baby Advice</a></div>
               </div>
        </div>
    </div>
    <div class="subnav11"><a href="#" class="navlink">More</a>
        <div class="more">
            <div class="subdiv">
                <p><a href="#">Holiday</a></p>
                <div><a href="#">Easter</a></div>
                <div><a href="#">Mother's Day</a></div>
                <div><a href="#">Father's Day</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Gifting</a></p>
                <div><a href="#">Gifts for Her</a></div>
                <div><a href="#">Gifts for Him</a></div>
                <div><a href="#">Gifts for Kids & Baby</a></div>
                <div><a href="#">Gifts for Foodies</a></div>
                <div><a href="#">Gifts for Plant Lovers</a></div>
                <div><a href="#">Gifts for Newlyweds</a></div>
                <div><a href="#">Gifts for Pets</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Pet Supplies</a></p>
                <div><a href="#">Dog Supplies</a></div>
                <div><a href="#">Cat Supplies</a></div>
                <div><a href="#">Bird Supplies</a></div>
                <div><a href="#">Fish Supplies</a></div>
                <div><a href="#">Small Animal Supplies</a></div>
                <div><a href="#">Pet Friendly Home</a></div>
            </div>
            <div class="subdiv">
                <a href="#">
                    <img style="width: 100%; padding-top: 18px;" src="https://ak1.ostkcdn.com/images/products/is/images/direct/d9d332346a904102baba51d75106bdad99541592/Soozier-Heavy-Duty-Multi-Function-Power-Rack-Cage-Home-Gym-Exercise-Workout-Station-Strength-Training-w--Stand-Rod.jpg"/>
                    <p style="font-size: 22px; font-weight: 400; padding: 0px; border: none;">extra 15% off</p>
                    <p style="font-weight: 300; font-size: 12px; padding: 0px; border: none;">Select Exercise Equipment<sup>*</sup></p>
                </a>
            </div>
            <div class="subdiv">
                <p><a href="#">Health & Beauty</a></p>
                <div><a href="#">Skin Care</a></div>
                <div><a href="#">Hair Care</a></div>
                <div><a href="#">Makeup</a></div>
                <div><a href="#">Perfumes & Fragrances</a></div>
                <div><a href="#">Holistic Supplies</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Exercise Equipment</a></p>
                <div><a href="#">Home Gym Systems</a></div>
                <div><a href="#">Treadmills</a></div>
                <div><a href="#">Exercise Bikes</a></div>
                <div><a href="#">Ellipticals</a></div>
                <div><a href="#">Rowers</a></div>
                <div><a href="#">Strength & Conditioning</a></div>
                <div><a href="#">Yoga & Pilates</a></div>
                <div><a href="#">Home Gym Mats</a></div>
            </div>
            <div class="subdiv">
                <p><a href="#">Entryway</a></p>
                <div><a href="#">Hall Trees</a></div>
                <div><a href="#">Console Tables</a></div>
                <div><a href="#">Coat Tracks</a></div>
                <div><a href="#">Benches</a></div>
                <div><a href="#">Wall Hooks</a></div>
            </div>
        </div>
    </div>
    <span style="border-left: 1px solid grey; margin: 5px 0px;" ></span>
    <div class="subnav12"><a href="idea.html" class="navkink">Ideas</a>
        <div class="ideas">
                <div style="grid-area: 1/1/span 1/span 4; height: 50px; text-align: center; padding: 16px; border: none; font-size: 25px;">More Ways to Shop</div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD1.png"/>
                    <p>Room Ideas</p>
                </a></div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD2.png"/>
                    <p>Shop by Style</p>
                </a></div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD3.png"/>
                    <p>Shop by Room</p>
                </a></div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/02222021-ID4-Shop_Easter_Decor.png"/>
                    <p>Shop Easter Decor</p>
                </a></div>
            
        
                
                <div style="grid-area: 3/1/span 1/ span 4; height: 50px; text-align: center; padding: 12px; border: none;font-size: 25px;">Inspiration & Ideas</div>
                <div style="grid-area: 4/1/5/2;"><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD1.png"/>
                    <p>Stylists Top 8 Shag Rugs</p>
                </a></div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD2.png"/>
                    <p>Pairing Lights & Seating</p>
                </a></div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD3.png"/>
                    <p>Multifunctional Furniture Guide</p>
                </a></div>
                <div><a href="#">
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD4.png"/>
                    <p>Best Faux-Down Comforters</p>
                </a></div>
        </div>
    </div>

    <div class="subnav13" style="border-bottom-color:red ;"><a href="#" class="navlink" style="color: red;">Sales & Deals</a>
        <div class="sales">
            <div>
                <div style="font-size: 50px; color: red;">sales & deals</div>
                <div style="font-size: 25px; padding-top: 25px; font-weight: 300; width: 40%;">shop.save.love.<i>repeat</i></div>
                <div style="width: 20%;"><button style=" height: 52px; width: 80%;background-color: white; border: none; font-size: 20px; margin-top: 6px;border-radius: 5px;">shop now</button></div>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/022212022-TNFlyout.svg?imwidth=320"/>
                <p>fresh savings</p>
                <p>On Spring Updates</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-StorageWithStyle.png?imwidth=320"/>
                <p>storage with style</p>
                <p>Organize with ease</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-ShagRugs.png?imwidth=320"/>
                <p>chic shag rugs</p>
                <p>Shop rugs both plush & pretty</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-MultifunctionalFurniture.png?imwidth=320"/>
                <p>multifunctional furniture</p>
                <p>Furnish with form & function</p>
            </div>

        </div>
    </div>
    </div>
</div>

<hr>
</nav>
<div class="sidebar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;">Categories</div>
<a id="one" href="#"><div style="background-color: rgba(225,230,231,0.2);">Furniture<i class="fa fa-angle-right"></i></div></a>
<a id="two" href="#"><div style="background-color: rgba(225,230,231,0.2);">Rugs<i class="fa fa-angle-right"></i></div></a>
<a id="three" href="#"><div style="background-color: rgba(225,230,231,0.2);">Decor<i class="fa fa-angle-right"></i></div></a>
<a id="four" href="#"><div style="background-color: rgba(225,230,231,0.2);">Bed & Bath<i class="fa fa-angle-right"></i></div></a>
<a id="five" href="#"><div style="background-color: rgba(225,230,231,0.2);">Home Improvement<i class="fa fa-angle-right"></i></div></a>
<a id="six" href="#"><div style="background-color: rgba(225,230,231,0.2);">Kitchen<i class="fa fa-angle-right"></i></div></a>
<a id="seven" href="#"><div style="background-color: rgba(225,230,231,0.2);">Outdoor<i class="fa fa-angle-right"></i></div></a>
<a id="eight" href="Jewelry.html"><div style="background-color: rgba(225,230,231,0.2);">Jewelry<i class="fa fa-angle-right"></i></div></a>
<a id="nine" href="lights.html"><div style="background-color: rgba(225,230,231,0.2);">Lighting<i class="fa fa-angle-right"></i></div></a>
<a id="ten" href="#"><div style="background-color: rgba(225,230,231,0.2);">Kids & Baby<i class="fa fa-angle-right"></i></div></a>
<a id="eleven" href="#"><div style="background-color: rgba(225,230,231,0.2);">More Categories<i class="fa fa-angle-right"></i></div></a>
<a id="twelve" href="idea.html"><div style="background-color: rgba(225,230,231,0.2);">Ideas<i class="fa fa-angle-right"></i></div></a>
<a id="thirteen" href="#"><div style="background-color: rgba(225,230,231,0.2); color: red;">Sales & Deals</div></a>
<a id="ac" href="#"><div style="border:none; padding: 22px;">Account/Sign In<i class="fa fa-angle-right"></i></div></a>
<a href="cart.html"><div style="border:none; padding: 20px;">My Lists</div></a>
<a id="con" href="#"><div style="border:none; padding: 20px;">Contact Us<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 20px;">Club O</div></a>
<div style="height: 350px;"></div>
</div>
<div class="furni-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px; text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Furniture</div>
<a href="#" id="sub1"><div style="background-color: rgba(225,230,231,0.2);">Living Room Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#" id="sub2"><div style="background-color: rgba(225,230,231,0.2);">Bedroom Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Dining, Kitchen & Bar<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Patio & Outdoor Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Home Improvement<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Office Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Furniture</div></a>
<div style="height: 350px;"></div>
</div>
<div class="rugs-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px; text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Rugs</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Area Rugs By Size<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Area Rugs By Color<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Rugs By Type<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Trending Rugs<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Area Rugs By Style<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Office Furniture<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop</div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Furniture</div></a>
<div style="height: 350px;"></div>
</div>
<div class="decor-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Decor</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Mirrors<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Decorative Accessories<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Wall <i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Art Gallery<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Window Treatments<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Throw Pillows<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Decor</div></a>
<div style="height: 350px;"></div>
</div>
<div class="bed-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Bed & Bath</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Bedding<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Bedding Basics<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Mattresses<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Baths & Towels<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kids Bedding<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Bathroom Furniture<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Bed & Bath</div></a>
<div style="height: 350px;"></div>
</div>
<div class="home-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Home Improvement</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kitchen<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Bedroom<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Storage & Organization<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Flooring & Wall<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Home Essentials<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Home Improvement</div></a>
<div style="height: 350px;"></div>
</div>
<div class="kitchen-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Kitchen</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Dinnerware<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kitchen Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Serveware<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Cookware & Bakeware<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kitchen Appliances<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kitchen Storage<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Kitchen</div></a>
<div style="height: 350px;"></div>
</div>
<div class="outdoor-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Outdoor</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Patio Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Outdoor Decor<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Umbrellas & Shades<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Gardening & Yard Care<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Grills & Outdoor Cooking<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Sports & Outdoors<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Outdoor</div></a>
<div style="height: 350px;"></div>
</div>
<div class="jewelry-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Jewelry</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">All Jewelry<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Wedding Rings<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Fine Jewelry<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Men's Jewelry<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Watches<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Jewelry</div></a>
<div style="height: 350px;"></div>
</div>
<div class="lighting-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Lighting</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Ceiling Lights<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Wall Lighting<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Lamps & Lamp Shades<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Ceiling Fans<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Outdoor Lighting<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kitchen & Bath Lighting<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Lighting</div></a>
<div style="height: 350px;"></div>
</div>
<div class="kids-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Kids & Baby</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Baby<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kids Furniture<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kids Bedding<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Toys By Age<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Toys & Play<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Kids & Baby</div></a>
<div style="height: 350px;"></div>
</div>
<div class="more-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px; text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>More Categories</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Holiday<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Gifting<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Pet Supplies<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Health & Beauty<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Exercise Equipment<i class="fa fa-angle-right"></i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Entryway<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All More Categories</div></a>
<div style="height: 350px;"></div>
</div>
<div class="ideas-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Ideas</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Inspiration & Ideas<i class="fa fa-angle-right"></i></div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">More Ways to Shop<i class="fa fa-angle-right"></i></div></a>

<div style="height: 350px; border: none;"></div>
</div>
<div class="acc-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>My Account</div>
<a href="signup.html"><div style="background-color: rgba(225,230,231,0.2);">Sign In</div></a>

<a href="signup.html"><div style="background-color: rgba(225,230,231,0.2);">Create Account</div></a>

<div style="height: 450px; border: none;"></div>
</div>
<div class="con-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px;text-align: center;"><i class="fa fa-angle-left" onclick="myfunc()"></i>Contact Us</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Message</div></a>

<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Email</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Phone</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">International Orders</div></a>
<div style="height: 450px; border: none;"></div>
</div>
<div class="livingfurni-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px; text-align: center;"><i class="fa fa-angle-left" onclick="func1()"></i>Living Room Furniture</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Sofas & Couches</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Sectionals</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Benches</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Ottomans & Poufs</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Accent Chairs</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Recliners</i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Coffee & Accent Tables</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">TV Stands</div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Living Room Furniture</div></a>
<div style="height: 350px;"></div>
</div>
<div class="bedfurni-bar">
<div style="background-color:red; padding:16px"><img style="margin: -125px -20px -20px -8px; height: 55px; width:55px; overflow: hidden;"src="https://s3-symbol-logo.tradingview.com/overstock--600.png"/></div>
<div style="padding: 22px; font-size: 20px; text-align: center;"><i class="fa fa-angle-left" onclick="func1()"></i>Bedroom Furniture</div>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Beds</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Bedroom Sets</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Headboards</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Bed Frames</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Dressers & Chests</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Nightstands</i></div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Armoires & Wardrobes</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Mattresses</div></a>
<a href="#"><div style="background-color: rgba(225,230,231,0.2);">Kids Beds</div></a>
<a href="#"><div style="border:none; padding: 22px; text-align: center; color: rgb(71, 70, 70);font-weight: bold;">Shop All Bedroom Furniture</div></a>
<div style="height: 350px;"></div>
</div>`

document.querySelector("#main-index").append(header);