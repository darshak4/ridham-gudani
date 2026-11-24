import defaultArticles from '../data/articlesData.json';

const API_BASE = 'https://prod-user-service.shivalik.io/api/v1';
const CATEGORY_ID = '68b2a939909b50559ca4131b';
const IMAGE_BASE = 'https://d1d09q7vt7sqxk.cloudfront.net/knowledges/images/';

/**
 * Fetch articles from API with instant fallback to bundled dataset
 */
export const fetchArticlesList = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(
      `${API_BASE}/knowledges/get-list?page=1&knowledgeType=Website&categoryId=${CATEGORY_ID}`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const list = data?.result?.knowledgeList;

    if (Array.isArray(list) && list.length > 0) {
      return list.map((item) => ({
        _id: item._id,
        title: item.title,
        descriptions: item.descriptions || '',
        image: item.image ? `${IMAGE_BASE}${item.image}` : defaultArticles[0]?.image,
        rawImage: item.image,
        categoryId: item.categoryId,
        categoryTitle: item.categoryTitle || 'Pulse',
        createdAt: item.createdAt || new Date().toISOString(),
        author: 'Ridham Gagani',
        authorRole: 'Co-founder & MD, Shivalik Group'
      }));
    }
  } catch (err) {
    // Graceful fallback to rich offline dataset
    console.info('Using offline articles dataset:', err.message);
  }

  return defaultArticles;
};

/**
 * Get article by ID
 */
export const fetchArticleDetail = async (id) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`${API_BASE}/knowledges/detail/${id}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      const item = data?.result;
      if (item) {
        return {
          _id: item._id,
          title: item.title,
          descriptions: item.descriptions || '',
          image: item.image ? `${IMAGE_BASE}${item.image}` : null,
          rawImage: item.image,
          categoryId: item.categoryId,
          categoryTitle: item.categoryTitle || 'Pulse',
          createdAt: item.createdAt,
          author: 'Ridham Gagani',
          authorRole: 'Co-founder & MD, Shivalik Group'
        };
      }
    }
  } catch (err) {
    console.info('Live detail fetch fallback for article id:', id);
  }

  return defaultArticles.find((a) => a._id === id) || null;
};

