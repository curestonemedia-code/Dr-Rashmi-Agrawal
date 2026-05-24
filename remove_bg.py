from PIL import Image

def remove_white_bg(image_path, output_path, tolerance=240):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if pixel is near-white
        if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
            # Add transparent pixel
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg("logo_raw.jpg", "public/logo_transparent.png")
print("Done")
