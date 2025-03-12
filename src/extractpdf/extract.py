import pytesseract
from pdf2image import convert_from_path
import json
import os

# Define the input PDF file path
pdf_path = "src/extractpdf/menu-restaurant.pdf"
output_json_path = "src/extractpdf/menu_data.json"
output_tsx_path = "src/extractpdf/Menu.tsx"

# Ensure the output directory exists
os.makedirs(os.path.dirname(output_tsx_path), exist_ok=True)

# Extract text from the PDF using OCR

def extract_text_with_ocr(pdf_path):
    menu_items = []
    images = convert_from_path(pdf_path)
    extracted_text = ""
    
    for image in images:
        extracted_text += pytesseract.image_to_string(image, lang="eng+fra") + "\n"
    
    lines = extracted_text.split("\n")
    for line in lines:
        if line.strip():
            parts = line.rsplit(" ", 1)  # Assuming last part is price
            if len(parts) == 2 and parts[1].replace('€', '').replace(',', '').replace('.', '').isdigit():
                name_description = parts[0].split(" - ", 1)
                if len(name_description) == 2:
                    name, description = name_description
                else:
                    name, description = name_description[0], ""
                try:
                    price = float(parts[1].replace('€', '').replace(',', '.'))
                    menu_items.append({"name": name.strip(), "description": description.strip(), "price": price})
                except ValueError:
                    continue
    return menu_items

# Extract and format menu data
menu_data = extract_text_with_ocr(pdf_path)

# Save extracted data as JSON for debugging
with open(output_json_path, "w", encoding="utf-8") as json_file:
    json.dump(menu_data, json_file, indent=2)

# Ensure extracted data is valid before generating the React file
if not menu_data:
    print("Warning: No menu items were extracted. Check PDF formatting.")

# Output to a React TypeScript file
react_tsx_template = f"""
import React from 'react';

interface MenuItem {{
  name: string;
  description: string;
  price: number;
}}

const menuData: MenuItem[] = {json.dumps(menu_data, indent=2)};

const MenuItemComponent: React.FC<MenuItem> = ({{ name, description, price }}) => (
  <div>
    <h3>{{name}}</h3>
    <p>{{description}}</p>
    <p>Price: €{{price.toFixed(2)}}</p>
  </div>
);

const MenuList: React.FC = () => (
  <div>
    {{menuData.map((item, index) => (
      <MenuItemComponent key={{index}} {{...item}} />
    ))}}
  </div>
);

export default MenuList;
"""

# Save the extracted menu data to a .tsx file
with open(output_tsx_path, "w", encoding="utf-8") as tsx_file:
    tsx_file.write(react_tsx_template)

print(f"React TypeScript file has been generated: {output_tsx_path}")