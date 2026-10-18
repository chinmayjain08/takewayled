# TAKEWAY Solar Catalogue 2026 — web catalogue data

## Contents
- `catalog.json`: categories, subcategories, product/model records, source page references and image paths.
- `images/page-XX.jpg`: rendered pages from the PDF for visual verification and product imagery.
- `ocr_by_page.json`: OCR text per product page to help complete specifications.
- `source/TAKEWAY (1).pdf`: original source PDF.

## Data structure
Each product record includes `category`, `subcategory`, `product_name`, `model`, `specifications`, `image`, and `source.pdf_page`.

## Important review notes
The source is predominantly image-based. OCR can misread model identifiers, and some pages show multiple variants. The images are full-page references rather than tightly cropped individual product images. Verify model names and fill `specifications` from the page images before publishing. No unverified specification values were invented.
