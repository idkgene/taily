export const PERFORMANCE_CONFIG = {
    CACHE_ENABLED: true,
    CACHE_TTL: 3600000, 
    CACHE_MAX_SIZE: 1000,
    CACHE_CLEANUP_INTERVAL: 300000,
    
    GC_THRESHOLD: 500 * 1024 * 1024, 
    GC_INTERVAL: 60000, 
    
    BATCH_SIZE: 100,
    BATCH_TIMEOUT: 1000,
    
    MAX_PARALLEL_OPERATIONS: 4,
    OPERATION_TIMEOUT: 30000
} as const;
