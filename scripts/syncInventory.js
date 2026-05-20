const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../data/products.json');

async function syncInventory() {
  console.log('[SYSTEM] Initiating connection to mock Supplier API...');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Read current local data
  let products = [];
  try {
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
    products = JSON.parse(data);
  } catch (err) {
    console.error('[ERROR] Failed to read local products data.', err);
    process.exit(1);
  }

  // Simulate parsing mock supplier response
  console.log('[SYSTEM] Fetching latest stock counts...');
  const simulatedSupplierStock = Math.floor(Math.random() * 50); // Random stock 0-50
  
  const maskIndex = products.findIndex(p => p.id === 'sku_mask_001');
  if (maskIndex > -1) {
    const oldStock = products[maskIndex].stock;
    products[maskIndex].stock = simulatedSupplierStock;
    products[maskIndex].lastSynced = new Date().toISOString();
    
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
    
    console.log(`[SUCCESS] Inventory synced. Old stock: ${oldStock} -> New stock: ${simulatedSupplierStock}`);
    
    if (simulatedSupplierStock < 25) {
      console.warn(`[ALERT] WARNING: Stock for SKU sku_mask_001 has dipped below 25. Current: ${simulatedSupplierStock}`);
    }
  } else {
    console.error('[ERROR] Mask SKU not found in local data.');
  }
}

syncInventory();
