import React from 'react'
import { createRoot } from 'react-dom/client'
import { Gifts, RecentlyViewedCategories, RecentlyViewedItems, Collections, Selections, Blogs, Farmhouse, Boho } from './components.jsx'
import Decor from './decor.jsx'
import './index.css'

//Gifts
const giftsDomNode = document.getElementById('gifts');
const giftsRoot = createRoot(giftsDomNode);
giftsRoot.render(<Gifts />);

//Recently viewed section
const recentlyViewedCategoriesDomNode = document.getElementById('recently-viewed-categories');
const recentlyViewedCategoriesRoot = createRoot(recentlyViewedCategoriesDomNode);
recentlyViewedCategoriesRoot.render(<RecentlyViewedCategories />);

const recentlyViewedItemsDomNode = document.getElementById('recently-viewed-items');
const recentlyViewedItemsRoot = createRoot(recentlyViewedItemsDomNode);
recentlyViewedItemsRoot.render(<RecentlyViewedItems />); 

//Collections
const collectionsDomNode = document.getElementById('collections');
const collectionsRoot = createRoot(collectionsDomNode);
collectionsRoot.render(<Collections />);

//Selections
const selectionsDomNode = document.getElementById('selections');
const selectionsRoot = createRoot(selectionsDomNode);
selectionsRoot.render(<Selections />);

//Blogs
const blogsDomNode = document.getElementById('blogs');
const blogsRoot = createRoot(blogsDomNode);
blogsRoot.render(<Blogs />);

//Decor
// const farmhouseDomNode = document.getElementById('farmhouse');
// const farmhouseRoot = createRoot(farmhouseDomNode);
// farmhouseRoot.render(<Farmhouse />);

// const bohoDomNode = document.getElementById('boho');
// const bohoRoot = createRoot(bohoDomNode);
// bohoRoot.render(<Boho />);

const decorDomNode = document.getElementById('decor');
const decorRoot = createRoot(decorDomNode);
decorRoot.render(<Decor />);